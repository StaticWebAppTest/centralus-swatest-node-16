module.exports = async function (context, req) {
  const date = "2023-11-11T14:07:19.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

