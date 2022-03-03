module.exports = async function (context, req) {
  const date = "2022-03-03T16:14:21.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

