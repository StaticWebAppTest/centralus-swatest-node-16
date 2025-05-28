module.exports = async function (context, req) {
  const date = "2025-05-28T22:12:39.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

