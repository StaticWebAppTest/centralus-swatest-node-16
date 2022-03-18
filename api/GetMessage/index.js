module.exports = async function (context, req) {
  const date = "2022-03-18T20:10:43.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

