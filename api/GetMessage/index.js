module.exports = async function (context, req) {
  const date = "2022-07-10T17:10:46.676Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

