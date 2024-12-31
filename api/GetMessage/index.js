module.exports = async function (context, req) {
  const date = "2024-12-31T05:11:27.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

