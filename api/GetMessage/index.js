module.exports = async function (context, req) {
  const date = "2024-05-14T12:18:22.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

