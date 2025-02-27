module.exports = async function (context, req) {
  const date = "2025-02-27T17:11:09.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

