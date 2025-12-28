module.exports = async function (context, req) {
  const date = "2025-12-28T15:13:28.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

