module.exports = async function (context, req) {
  const date = "2022-12-21T10:10:28.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

