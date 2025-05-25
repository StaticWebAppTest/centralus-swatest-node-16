module.exports = async function (context, req) {
  const date = "2025-05-25T09:12:21.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

