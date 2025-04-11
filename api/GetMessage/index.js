module.exports = async function (context, req) {
  const date = "2025-04-11T15:13:33.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

