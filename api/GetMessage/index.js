module.exports = async function (context, req) {
  const date = "2023-06-06T17:08:05.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

