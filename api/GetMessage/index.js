module.exports = async function (context, req) {
  const date = "2023-04-29T08:10:12.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

