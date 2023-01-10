module.exports = async function (context, req) {
  const date = "2023-01-10T16:15:01.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

