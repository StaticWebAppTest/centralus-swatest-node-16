module.exports = async function (context, req) {
  const date = "2022-08-08T09:10:46.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

