module.exports = async function (context, req) {
  const date = "2025-02-16T09:10:42.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

