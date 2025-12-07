module.exports = async function (context, req) {
  const date = "2025-12-07T07:12:54.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

