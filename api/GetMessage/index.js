module.exports = async function (context, req) {
  const date = "2024-05-29T23:10:01.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

