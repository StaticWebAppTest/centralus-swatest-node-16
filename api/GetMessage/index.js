module.exports = async function (context, req) {
  const date = "2022-11-05T05:10:13.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

