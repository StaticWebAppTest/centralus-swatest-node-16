module.exports = async function (context, req) {
  const date = "2025-03-05T16:20:30.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

