module.exports = async function (context, req) {
  const date = "2024-03-03T05:08:52.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

