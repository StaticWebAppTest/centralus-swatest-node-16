module.exports = async function (context, req) {
  const date = "2024-02-09T15:08:32.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

