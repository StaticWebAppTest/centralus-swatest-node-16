module.exports = async function (context, req) {
  const date = "2025-09-28T10:11:49.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

