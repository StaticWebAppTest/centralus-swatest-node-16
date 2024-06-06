module.exports = async function (context, req) {
  const date = "2024-06-06T15:11:19.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

