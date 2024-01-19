module.exports = async function (context, req) {
  const date = "2024-01-19T16:11:42.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

