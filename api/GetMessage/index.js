module.exports = async function (context, req) {
  const date = "2023-10-10T04:10:36.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

