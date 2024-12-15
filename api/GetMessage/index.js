module.exports = async function (context, req) {
  const date = "2024-12-15T20:12:41.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

