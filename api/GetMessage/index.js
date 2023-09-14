module.exports = async function (context, req) {
  const date = "2023-09-14T06:11:52.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

