module.exports = async function (context, req) {
  const date = "2025-12-10T04:27:50.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

