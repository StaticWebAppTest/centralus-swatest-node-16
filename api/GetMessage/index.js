module.exports = async function (context, req) {
  const date = "2025-09-24T05:13:02.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

