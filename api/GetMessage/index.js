module.exports = async function (context, req) {
  const date = "2023-03-28T14:09:41.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

