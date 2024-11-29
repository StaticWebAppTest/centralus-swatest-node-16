module.exports = async function (context, req) {
  const date = "2024-11-29T16:15:13.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

