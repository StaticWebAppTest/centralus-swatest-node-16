module.exports = async function (context, req) {
  const date = "2022-04-14T10:11:29.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

