module.exports = async function (context, req) {
  const date = "2024-11-28T15:12:43.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

