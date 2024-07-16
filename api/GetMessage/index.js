module.exports = async function (context, req) {
  const date = "2024-07-16T20:10:32.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

