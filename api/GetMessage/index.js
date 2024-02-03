module.exports = async function (context, req) {
  const date = "2024-02-03T21:07:09.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

