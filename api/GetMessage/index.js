module.exports = async function (context, req) {
  const date = "2022-10-11T08:21:32.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

