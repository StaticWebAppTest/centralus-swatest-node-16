module.exports = async function (context, req) {
  const date = "2023-09-07T06:11:22.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

