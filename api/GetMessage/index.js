module.exports = async function (context, req) {
  const date = "2024-03-25T16:11:41.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

