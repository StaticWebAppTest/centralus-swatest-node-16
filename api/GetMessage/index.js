module.exports = async function (context, req) {
  const date = "2025-02-28T19:11:14.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

