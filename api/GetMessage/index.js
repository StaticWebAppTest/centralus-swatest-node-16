module.exports = async function (context, req) {
  const date = "2024-03-26T08:11:46.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

