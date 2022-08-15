module.exports = async function (context, req) {
  const date = "2022-08-15T22:11:06.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

