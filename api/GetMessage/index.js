module.exports = async function (context, req) {
  const date = "2023-07-03T19:08:09.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

