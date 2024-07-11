module.exports = async function (context, req) {
  const date = "2024-07-11T09:11:58.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

