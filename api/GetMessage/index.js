module.exports = async function (context, req) {
  const date = "2024-11-13T19:09:45.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

