module.exports = async function (context, req) {
  const date = "2024-10-05T06:15:37.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

