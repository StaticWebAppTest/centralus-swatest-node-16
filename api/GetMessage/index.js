module.exports = async function (context, req) {
  const date = "2024-06-11T20:10:41.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

