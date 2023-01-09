module.exports = async function (context, req) {
  const date = "2023-01-09T18:12:31.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

