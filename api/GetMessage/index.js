module.exports = async function (context, req) {
  const date = "2024-10-05T08:14:08.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

