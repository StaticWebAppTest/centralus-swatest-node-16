module.exports = async function (context, req) {
  const date = "2024-07-14T05:12:04.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

