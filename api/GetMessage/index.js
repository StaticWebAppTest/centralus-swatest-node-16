module.exports = async function (context, req) {
  const date = "2024-06-19T14:09:19.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

