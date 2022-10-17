module.exports = async function (context, req) {
  const date = "2022-10-17T18:27:09.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

