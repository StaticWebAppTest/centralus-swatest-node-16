module.exports = async function (context, req) {
  const date = "2023-07-23T02:09:24.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

