module.exports = async function (context, req) {
  const date = "2024-09-24T09:13:02.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

