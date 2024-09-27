module.exports = async function (context, req) {
  const date = "2024-09-27T09:13:07.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

