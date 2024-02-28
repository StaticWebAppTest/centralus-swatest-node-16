module.exports = async function (context, req) {
  const date = "2024-02-28T08:11:51.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

