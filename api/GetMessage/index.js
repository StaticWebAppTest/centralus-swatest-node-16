module.exports = async function (context, req) {
  const date = "2024-07-25T13:13:45.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

