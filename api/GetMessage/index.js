module.exports = async function (context, req) {
  const date = "2022-04-03T02:25:09.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

