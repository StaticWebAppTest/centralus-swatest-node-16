module.exports = async function (context, req) {
  const date = "2024-06-24T08:13:36.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

