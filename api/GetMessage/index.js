module.exports = async function (context, req) {
  const date = "2025-02-06T02:13:08.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

