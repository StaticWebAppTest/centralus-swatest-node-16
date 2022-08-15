module.exports = async function (context, req) {
  const date = "2022-08-15T06:14:57.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

