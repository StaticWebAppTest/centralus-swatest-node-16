module.exports = async function (context, req) {
  const date = "2022-05-18T12:21:23.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

