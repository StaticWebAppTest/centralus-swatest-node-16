module.exports = async function (context, req) {
  const date = "2025-02-28T21:10:54.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

