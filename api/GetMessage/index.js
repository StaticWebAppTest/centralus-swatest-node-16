module.exports = async function (context, req) {
  const date = "2023-09-08T00:39:42.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

