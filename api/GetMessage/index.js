module.exports = async function (context, req) {
  const date = "2023-06-18T07:08:12.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

