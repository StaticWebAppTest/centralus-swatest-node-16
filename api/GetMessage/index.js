module.exports = async function (context, req) {
  const date = "2025-05-10T14:10:43.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

