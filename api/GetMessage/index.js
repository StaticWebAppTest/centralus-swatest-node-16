module.exports = async function (context, req) {
  const date = "2023-12-22T08:11:50.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

