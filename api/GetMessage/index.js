module.exports = async function (context, req) {
  const date = "2022-08-19T21:09:54.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

