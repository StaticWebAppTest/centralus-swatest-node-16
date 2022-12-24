module.exports = async function (context, req) {
  const date = "2022-12-24T12:15:31.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

