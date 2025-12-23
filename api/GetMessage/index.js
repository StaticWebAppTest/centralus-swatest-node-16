module.exports = async function (context, req) {
  const date = "2025-12-23T17:14:53.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

