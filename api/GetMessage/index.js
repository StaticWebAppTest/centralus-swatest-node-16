module.exports = async function (context, req) {
  const date = "2022-12-22T15:10:11.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

