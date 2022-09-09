module.exports = async function (context, req) {
  const date = "2022-09-09T19:10:57.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

