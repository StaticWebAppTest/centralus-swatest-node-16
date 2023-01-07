module.exports = async function (context, req) {
  const date = "2023-01-07T13:12:12.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

