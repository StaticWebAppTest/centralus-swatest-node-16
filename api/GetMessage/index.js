module.exports = async function (context, req) {
  const date = "2024-04-29T18:12:09.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

