module.exports = async function (context, req) {
  const date = "2022-10-31T01:13:29.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

