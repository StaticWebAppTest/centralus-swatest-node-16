module.exports = async function (context, req) {
  const date = "2025-02-03T05:11:50.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

