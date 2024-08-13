module.exports = async function (context, req) {
  const date = "2024-08-13T14:09:58.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

