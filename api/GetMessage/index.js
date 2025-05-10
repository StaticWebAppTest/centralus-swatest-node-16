module.exports = async function (context, req) {
  const date = "2025-05-10T08:15:17.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

