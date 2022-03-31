module.exports = async function (context, req) {
  const date = "2022-03-31T07:10:39.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

