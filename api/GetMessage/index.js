module.exports = async function (context, req) {
  const date = "2023-03-11T15:08:44.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

