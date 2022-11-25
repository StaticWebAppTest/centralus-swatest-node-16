module.exports = async function (context, req) {
  const date = "2022-11-25T20:10:39.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

