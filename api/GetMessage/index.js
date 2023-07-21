module.exports = async function (context, req) {
  const date = "2023-07-21T05:08:37.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

