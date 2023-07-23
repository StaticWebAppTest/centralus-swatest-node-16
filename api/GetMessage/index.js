module.exports = async function (context, req) {
  const date = "2023-07-23T15:08:02.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

