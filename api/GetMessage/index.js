module.exports = async function (context, req) {
  const date = "2023-09-03T13:08:38.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

