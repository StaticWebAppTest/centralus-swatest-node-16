module.exports = async function (context, req) {
  const date = "2024-12-22T20:11:36.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

