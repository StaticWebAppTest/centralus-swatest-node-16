module.exports = async function (context, req) {
  const date = "2022-12-03T20:09:27.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

