module.exports = async function (context, req) {
  const date = "2023-07-07T21:08:36.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

