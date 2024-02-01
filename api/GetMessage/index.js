module.exports = async function (context, req) {
  const date = "2024-02-01T19:08:26.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

