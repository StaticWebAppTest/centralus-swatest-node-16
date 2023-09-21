module.exports = async function (context, req) {
  const date = "2023-09-21T16:10:20.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

