module.exports = async function (context, req) {
  const date = "2023-02-06T15:10:16.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

