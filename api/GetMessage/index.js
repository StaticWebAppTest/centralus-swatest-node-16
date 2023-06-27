module.exports = async function (context, req) {
  const date = "2023-06-27T09:10:26.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

