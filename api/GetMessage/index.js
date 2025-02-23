module.exports = async function (context, req) {
  const date = "2025-02-23T07:10:36.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

