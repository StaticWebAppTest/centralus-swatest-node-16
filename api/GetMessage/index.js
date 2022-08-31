module.exports = async function (context, req) {
  const date = "2022-08-31T12:23:57.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

