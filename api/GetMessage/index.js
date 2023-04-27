module.exports = async function (context, req) {
  const date = "2023-04-27T15:08:02.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

