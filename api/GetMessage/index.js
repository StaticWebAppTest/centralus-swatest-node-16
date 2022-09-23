module.exports = async function (context, req) {
  const date = "2022-09-23T17:26:55.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

