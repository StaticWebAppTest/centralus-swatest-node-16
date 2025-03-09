module.exports = async function (context, req) {
  const date = "2025-03-09T09:09:17.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

