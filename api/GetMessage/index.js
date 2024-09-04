module.exports = async function (context, req) {
  const date = "2024-09-04T20:12:08.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

