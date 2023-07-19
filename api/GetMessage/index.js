module.exports = async function (context, req) {
  const date = "2023-07-19T08:13:02.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

