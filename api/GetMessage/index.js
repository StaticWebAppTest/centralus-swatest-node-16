module.exports = async function (context, req) {
  const date = "2024-06-15T19:08:29.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

