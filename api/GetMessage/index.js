module.exports = async function (context, req) {
  const date = "2022-07-03T20:10:29.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

