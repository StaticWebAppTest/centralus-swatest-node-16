module.exports = async function (context, req) {
  const date = "2022-09-02T08:14:22.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

