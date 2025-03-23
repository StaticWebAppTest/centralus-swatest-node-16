module.exports = async function (context, req) {
  const date = "2025-03-23T05:11:32.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

