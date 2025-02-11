module.exports = async function (context, req) {
  const date = "2025-02-11T16:15:33.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

