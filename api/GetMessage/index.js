module.exports = async function (context, req) {
  const date = "2023-06-02T14:07:28.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

