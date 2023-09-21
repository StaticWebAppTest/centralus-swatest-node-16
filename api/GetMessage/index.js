module.exports = async function (context, req) {
  const date = "2023-09-21T20:08:48.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

