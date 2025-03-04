module.exports = async function (context, req) {
  const date = "2025-03-04T05:12:26.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

