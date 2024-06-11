module.exports = async function (context, req) {
  const date = "2024-06-11T14:09:58.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

