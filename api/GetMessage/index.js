module.exports = async function (context, req) {
  const date = "2024-12-19T11:10:34.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

