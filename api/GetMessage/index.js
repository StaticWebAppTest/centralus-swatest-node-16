module.exports = async function (context, req) {
  const date = "2024-07-02T05:11:02.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

