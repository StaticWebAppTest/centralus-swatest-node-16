module.exports = async function (context, req) {
  const date = "2023-08-21T20:08:54.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

