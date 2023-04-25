module.exports = async function (context, req) {
  const date = "2023-04-25T07:08:25.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

