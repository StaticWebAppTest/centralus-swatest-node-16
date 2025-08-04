module.exports = async function (context, req) {
  const date = "2025-08-04T05:32:07.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

