module.exports = async function (context, req) {
  const date = "2024-10-04T08:15:16.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

