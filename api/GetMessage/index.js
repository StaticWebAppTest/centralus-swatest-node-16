module.exports = async function (context, req) {
  const date = "2024-06-13T14:10:35.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

