module.exports = async function (context, req) {
  const date = "2024-02-22T14:09:21.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

