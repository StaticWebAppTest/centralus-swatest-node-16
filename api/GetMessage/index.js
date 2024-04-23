module.exports = async function (context, req) {
  const date = "2024-04-23T09:09:55.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

