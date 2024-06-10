module.exports = async function (context, req) {
  const date = "2024-06-10T21:10:33.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

