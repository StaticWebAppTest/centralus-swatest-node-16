module.exports = async function (context, req) {
  const date = "2024-06-13T09:11:34.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

