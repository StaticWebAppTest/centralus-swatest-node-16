module.exports = async function (context, req) {
  const date = "2023-02-22T02:18:07.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

