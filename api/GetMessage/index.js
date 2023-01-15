module.exports = async function (context, req) {
  const date = "2023-01-15T07:08:11.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

