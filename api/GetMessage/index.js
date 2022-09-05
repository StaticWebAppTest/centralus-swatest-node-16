module.exports = async function (context, req) {
  const date = "2022-09-05T18:14:21.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

