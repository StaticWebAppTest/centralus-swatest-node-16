module.exports = async function (context, req) {
  const date = "2024-07-10T13:13:54.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

