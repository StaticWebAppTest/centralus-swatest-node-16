module.exports = async function (context, req) {
  const date = "2024-06-03T14:09:44.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

