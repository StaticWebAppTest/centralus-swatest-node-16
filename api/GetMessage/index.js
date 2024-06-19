module.exports = async function (context, req) {
  const date = "2024-06-19T15:11:04.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

