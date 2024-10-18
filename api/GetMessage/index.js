module.exports = async function (context, req) {
  const date = "2024-10-18T07:11:38.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

