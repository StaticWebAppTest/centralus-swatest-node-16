module.exports = async function (context, req) {
  const date = "2022-06-27T09:10:41.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

