module.exports = async function (context, req) {
  const date = "2023-11-28T08:12:37.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

