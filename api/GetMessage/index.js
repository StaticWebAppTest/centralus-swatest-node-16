module.exports = async function (context, req) {
  const date = "2024-02-01T08:11:37.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

