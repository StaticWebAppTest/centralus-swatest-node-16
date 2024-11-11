module.exports = async function (context, req) {
  const date = "2024-11-11T05:12:38.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

