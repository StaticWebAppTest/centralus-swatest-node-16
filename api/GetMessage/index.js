module.exports = async function (context, req) {
  const date = "2023-01-26T19:07:46.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

