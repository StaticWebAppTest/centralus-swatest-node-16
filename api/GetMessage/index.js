module.exports = async function (context, req) {
  const date = "2024-10-06T12:20:05.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

