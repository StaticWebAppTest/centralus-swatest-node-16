module.exports = async function (context, req) {
  const date = "2023-04-17T10:10:08.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

