module.exports = async function (context, req) {
  const date = "2022-07-04T16:15:17.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

