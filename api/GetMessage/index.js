module.exports = async function (context, req) {
  const date = "2024-11-30T21:10:44.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

