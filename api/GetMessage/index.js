module.exports = async function (context, req) {
  const date = "2022-11-27T19:07:47.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

