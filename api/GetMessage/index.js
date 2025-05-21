module.exports = async function (context, req) {
  const date = "2025-05-21T18:18:58.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

