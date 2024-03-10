module.exports = async function (context, req) {
  const date = "2024-03-10T15:07:54.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

