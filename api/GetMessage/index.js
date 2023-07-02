module.exports = async function (context, req) {
  const date = "2023-07-02T09:08:58.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

