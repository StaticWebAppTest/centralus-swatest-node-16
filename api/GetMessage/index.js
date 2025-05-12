module.exports = async function (context, req) {
  const date = "2025-05-12T14:14:05.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

