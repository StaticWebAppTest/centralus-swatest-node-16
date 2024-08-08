module.exports = async function (context, req) {
  const date = "2024-08-08T21:10:08.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

