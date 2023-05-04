module.exports = async function (context, req) {
  const date = "2023-05-04T07:08:39.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

