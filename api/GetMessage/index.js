module.exports = async function (context, req) {
  const date = "2024-11-20T04:15:21.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

