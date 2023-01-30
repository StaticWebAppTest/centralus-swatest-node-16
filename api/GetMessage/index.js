module.exports = async function (context, req) {
  const date = "2023-01-30T02:09:21.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

