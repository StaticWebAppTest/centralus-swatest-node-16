module.exports = async function (context, req) {
  const date = "2023-11-11T12:14:58.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

