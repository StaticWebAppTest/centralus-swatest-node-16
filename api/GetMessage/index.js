module.exports = async function (context, req) {
  const date = "2023-08-21T07:08:24.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

