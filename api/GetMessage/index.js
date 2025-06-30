module.exports = async function (context, req) {
  const date = "2025-06-30T10:15:23.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

