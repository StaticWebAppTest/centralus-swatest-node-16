module.exports = async function (context, req) {
  const date = "2024-03-04T19:08:01.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

