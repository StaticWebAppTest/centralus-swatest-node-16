module.exports = async function (context, req) {
  const date = "2024-07-29T12:19:59.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

