module.exports = async function (context, req) {
  const date = "2022-10-01T17:20:37.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

