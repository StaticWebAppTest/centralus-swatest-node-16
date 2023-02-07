module.exports = async function (context, req) {
  const date = "2023-02-07T22:09:31.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

