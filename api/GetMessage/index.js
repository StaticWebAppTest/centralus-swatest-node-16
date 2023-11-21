module.exports = async function (context, req) {
  const date = "2023-11-21T20:08:51.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

