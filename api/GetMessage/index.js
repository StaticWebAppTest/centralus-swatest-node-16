module.exports = async function (context, req) {
  const date = "2023-11-06T06:12:23.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

