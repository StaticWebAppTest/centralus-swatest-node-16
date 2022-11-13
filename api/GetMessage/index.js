module.exports = async function (context, req) {
  const date = "2022-11-13T20:11:31.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

