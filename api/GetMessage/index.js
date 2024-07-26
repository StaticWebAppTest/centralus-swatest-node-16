module.exports = async function (context, req) {
  const date = "2024-07-26T12:18:54.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

