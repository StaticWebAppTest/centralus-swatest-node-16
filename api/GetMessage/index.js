module.exports = async function (context, req) {
  const date = "2025-01-09T05:11:38.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

