module.exports = async function (context, req) {
  const date = "2023-05-01T05:08:46.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

