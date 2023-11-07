module.exports = async function (context, req) {
  const date = "2023-11-07T05:08:44.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

