module.exports = async function (context, req) {
  const date = "2024-08-02T02:00:22.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

