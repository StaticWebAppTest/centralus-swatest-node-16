module.exports = async function (context, req) {
  const date = "2022-08-28T22:10:21.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

