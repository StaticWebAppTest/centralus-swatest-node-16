module.exports = async function (context, req) {
  const date = "2023-03-18T05:08:34.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

