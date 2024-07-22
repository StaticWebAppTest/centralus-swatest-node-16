module.exports = async function (context, req) {
  const date = "2024-07-22T05:11:20.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

