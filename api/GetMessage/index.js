module.exports = async function (context, req) {
  const date = "2024-02-03T04:10:13.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

