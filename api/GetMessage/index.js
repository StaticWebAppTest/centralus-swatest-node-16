module.exports = async function (context, req) {
  const date = "2025-06-30T16:17:07.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

