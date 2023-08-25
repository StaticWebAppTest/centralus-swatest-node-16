module.exports = async function (context, req) {
  const date = "2023-08-25T15:08:41.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

