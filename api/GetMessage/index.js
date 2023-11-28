module.exports = async function (context, req) {
  const date = "2023-11-28T21:08:17.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

