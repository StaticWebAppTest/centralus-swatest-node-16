module.exports = async function (context, req) {
  const date = "2023-05-10T07:08:37.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

