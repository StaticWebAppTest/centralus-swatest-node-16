module.exports = async function (context, req) {
  const date = "2023-04-23T15:08:05.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

