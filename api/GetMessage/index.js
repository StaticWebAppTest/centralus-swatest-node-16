module.exports = async function (context, req) {
  const date = "2023-08-09T05:08:30.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

