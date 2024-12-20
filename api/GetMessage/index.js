module.exports = async function (context, req) {
  const date = "2024-12-20T13:17:56.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

