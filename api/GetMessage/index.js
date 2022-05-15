module.exports = async function (context, req) {
  const date = "2022-05-15T03:10:37.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

