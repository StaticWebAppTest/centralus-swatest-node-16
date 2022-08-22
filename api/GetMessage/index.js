module.exports = async function (context, req) {
  const date = "2022-08-22T20:11:36.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

