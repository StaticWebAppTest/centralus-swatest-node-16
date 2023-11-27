module.exports = async function (context, req) {
  const date = "2023-11-27T14:08:56.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

