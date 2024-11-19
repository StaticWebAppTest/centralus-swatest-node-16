module.exports = async function (context, req) {
  const date = "2024-11-19T20:13:30.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

