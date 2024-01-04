module.exports = async function (context, req) {
  const date = "2024-01-04T01:50:23.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

