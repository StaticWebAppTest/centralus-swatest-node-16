module.exports = async function (context, req) {
  const date = "2023-08-11T20:08:48.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

