module.exports = async function (context, req) {
  const date = "2025-03-27T07:13:01.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

