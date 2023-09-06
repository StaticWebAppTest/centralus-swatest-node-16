module.exports = async function (context, req) {
  const date = "2023-09-06T23:08:12.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

