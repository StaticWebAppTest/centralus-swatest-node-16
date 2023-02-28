module.exports = async function (context, req) {
  const date = "2023-02-28T22:09:42.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

