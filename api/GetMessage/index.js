module.exports = async function (context, req) {
  const date = "2024-02-04T05:08:05.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

