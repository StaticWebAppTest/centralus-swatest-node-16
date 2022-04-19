module.exports = async function (context, req) {
  const date = "2022-04-19T19:08:45.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

