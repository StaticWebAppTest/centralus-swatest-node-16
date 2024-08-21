module.exports = async function (context, req) {
  const date = "2024-08-21T20:11:42.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

