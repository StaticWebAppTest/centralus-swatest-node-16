module.exports = async function (context, req) {
  const date = "2022-12-22T00:49:10.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

