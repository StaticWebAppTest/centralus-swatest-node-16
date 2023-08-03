module.exports = async function (context, req) {
  const date = "2023-08-03T03:09:20.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

