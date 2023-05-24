module.exports = async function (context, req) {
  const date = "2023-05-24T20:08:32.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

