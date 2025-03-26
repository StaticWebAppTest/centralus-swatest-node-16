module.exports = async function (context, req) {
  const date = "2025-03-26T11:10:40.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

