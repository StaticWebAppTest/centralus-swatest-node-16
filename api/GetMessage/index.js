module.exports = async function (context, req) {
  const date = "2023-05-30T18:10:59.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

