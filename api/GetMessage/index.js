module.exports = async function (context, req) {
  const date = "2024-05-01T16:11:58.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

