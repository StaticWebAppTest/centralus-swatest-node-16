module.exports = async function (context, req) {
  const date = "2025-02-25T02:19:12.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

