module.exports = async function (context, req) {
  const date = "2022-04-10T10:10:43.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

