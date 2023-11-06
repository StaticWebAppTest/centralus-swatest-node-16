module.exports = async function (context, req) {
  const date = "2023-11-06T14:08:57.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

