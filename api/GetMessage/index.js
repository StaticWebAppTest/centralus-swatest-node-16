module.exports = async function (context, req) {
  const date = "2025-02-08T06:14:50.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

