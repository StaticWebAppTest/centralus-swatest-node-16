module.exports = async function (context, req) {
  const date = "2022-11-13T09:10:55.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

