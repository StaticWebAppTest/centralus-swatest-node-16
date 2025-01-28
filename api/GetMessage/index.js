module.exports = async function (context, req) {
  const date = "2025-01-28T14:11:07.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

