module.exports = async function (context, req) {
  const date = "2024-04-14T05:55:41.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

