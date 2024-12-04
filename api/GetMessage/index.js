module.exports = async function (context, req) {
  const date = "2024-12-04T05:12:33.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

