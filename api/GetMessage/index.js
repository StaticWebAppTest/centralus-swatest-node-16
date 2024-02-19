module.exports = async function (context, req) {
  const date = "2024-02-19T15:09:37.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

