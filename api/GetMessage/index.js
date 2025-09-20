module.exports = async function (context, req) {
  const date = "2025-09-20T05:11:50.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

