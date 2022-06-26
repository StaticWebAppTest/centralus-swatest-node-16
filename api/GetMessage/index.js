module.exports = async function (context, req) {
  const date = "2022-06-26T03:28:10.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

