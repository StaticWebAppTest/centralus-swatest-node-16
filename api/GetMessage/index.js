module.exports = async function (context, req) {
  const date = "2024-06-28T14:09:47.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

