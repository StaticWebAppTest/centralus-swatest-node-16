module.exports = async function (context, req) {
  const date = "2023-12-16T08:10:55.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

