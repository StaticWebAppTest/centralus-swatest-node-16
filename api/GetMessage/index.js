module.exports = async function (context, req) {
  const date = "2024-12-13T20:13:55.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

