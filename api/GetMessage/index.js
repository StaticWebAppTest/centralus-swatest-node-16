module.exports = async function (context, req) {
  const date = "2023-08-18T20:08:36.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

