module.exports = async function (context, req) {
  const date = "2025-05-10T16:14:26.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

