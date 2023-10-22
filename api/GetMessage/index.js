module.exports = async function (context, req) {
  const date = "2023-10-22T01:50:49.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

