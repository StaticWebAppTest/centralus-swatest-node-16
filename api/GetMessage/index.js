module.exports = async function (context, req) {
  const date = "2022-03-03T07:09:39.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

