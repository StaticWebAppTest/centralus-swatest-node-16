module.exports = async function (context, req) {
  const date = "2023-04-13T12:17:15.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

