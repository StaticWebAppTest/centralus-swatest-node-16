module.exports = async function (context, req) {
  const date = "2022-05-17T23:11:06.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

