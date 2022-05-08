module.exports = async function (context, req) {
  const date = "2022-05-08T21:09:26.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

