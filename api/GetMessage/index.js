module.exports = async function (context, req) {
  const date = "2022-04-18T10:12:28.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

