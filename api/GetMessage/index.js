module.exports = async function (context, req) {
  const date = "2022-07-23T22:10:09.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

