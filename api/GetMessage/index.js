module.exports = async function (context, req) {
  const date = "2025-05-03T19:09:25.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

