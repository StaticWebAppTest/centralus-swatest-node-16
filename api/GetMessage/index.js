module.exports = async function (context, req) {
  const date = "2022-11-13T19:08:57.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

