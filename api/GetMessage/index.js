module.exports = async function (context, req) {
  const date = "2024-07-10T09:10:58.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

