module.exports = async function (context, req) {
  const date = "2024-09-22T20:11:49.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

