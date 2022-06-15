module.exports = async function (context, req) {
  const date = "2022-06-15T10:11:40.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

