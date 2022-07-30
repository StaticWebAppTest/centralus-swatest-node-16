module.exports = async function (context, req) {
  const date = "2022-07-30T17:11:12.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

