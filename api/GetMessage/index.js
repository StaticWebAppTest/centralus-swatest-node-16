module.exports = async function (context, req) {
  const date = "2022-12-18T17:07:36.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

