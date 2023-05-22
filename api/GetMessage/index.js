module.exports = async function (context, req) {
  const date = "2023-05-22T20:08:49.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

