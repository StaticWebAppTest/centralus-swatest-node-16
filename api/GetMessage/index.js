module.exports = async function (context, req) {
  const date = "2025-03-10T10:11:41.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

