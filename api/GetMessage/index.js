module.exports = async function (context, req) {
  const date = "2023-01-29T08:11:24.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

