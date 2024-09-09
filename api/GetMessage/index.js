module.exports = async function (context, req) {
  const date = "2024-09-09T14:12:58.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

