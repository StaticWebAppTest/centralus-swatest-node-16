module.exports = async function (context, req) {
  const date = "2023-03-16T08:12:48.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

