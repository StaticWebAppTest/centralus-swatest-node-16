module.exports = async function (context, req) {
  const date = "2024-12-23T02:18:02.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

