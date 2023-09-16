module.exports = async function (context, req) {
  const date = "2023-09-16T13:08:39.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

