module.exports = async function (context, req) {
  const date = "2023-12-29T02:15:43.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

