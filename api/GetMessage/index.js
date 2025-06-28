module.exports = async function (context, req) {
  const date = "2025-06-28T21:11:42.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

