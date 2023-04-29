module.exports = async function (context, req) {
  const date = "2023-04-29T05:08:02.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

