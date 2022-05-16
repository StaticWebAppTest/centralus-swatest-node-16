module.exports = async function (context, req) {
  const date = "2022-05-16T05:16:35.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

