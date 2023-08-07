module.exports = async function (context, req) {
  const date = "2023-08-07T20:08:57.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

