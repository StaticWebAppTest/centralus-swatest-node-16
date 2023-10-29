module.exports = async function (context, req) {
  const date = "2023-10-29T08:10:17.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

