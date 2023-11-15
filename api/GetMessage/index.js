module.exports = async function (context, req) {
  const date = "2023-11-15T20:09:37.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

