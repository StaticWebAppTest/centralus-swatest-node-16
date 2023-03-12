module.exports = async function (context, req) {
  const date = "2023-03-12T05:08:39.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

