module.exports = async function (context, req) {
  const date = "2023-01-09T08:13:05.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

