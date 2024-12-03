module.exports = async function (context, req) {
  const date = "2024-12-03T15:13:11.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

