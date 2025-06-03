module.exports = async function (context, req) {
  const date = "2025-06-03T09:15:15.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

