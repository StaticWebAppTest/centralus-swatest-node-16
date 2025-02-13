module.exports = async function (context, req) {
  const date = "2025-02-13T08:15:42.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

