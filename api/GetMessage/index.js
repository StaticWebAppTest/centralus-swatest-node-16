module.exports = async function (context, req) {
  const date = "2022-11-18T03:09:43.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

