module.exports = async function (context, req) {
  const date = "2022-11-25T23:10:03.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

