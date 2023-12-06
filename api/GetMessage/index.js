module.exports = async function (context, req) {
  const date = "2023-12-06T19:07:35.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

