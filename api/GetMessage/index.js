module.exports = async function (context, req) {
  const date = "2025-08-11T16:18:09.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

