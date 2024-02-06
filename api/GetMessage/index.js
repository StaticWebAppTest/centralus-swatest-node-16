module.exports = async function (context, req) {
  const date = "2024-02-06T08:12:09.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

