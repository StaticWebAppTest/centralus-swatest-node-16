module.exports = async function (context, req) {
  const date = "2025-01-25T08:14:18.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

