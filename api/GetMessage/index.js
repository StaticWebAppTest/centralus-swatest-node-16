module.exports = async function (context, req) {
  const date = "2022-08-01T14:12:57.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

