module.exports = async function (context, req) {
  const date = "2023-06-14T22:08:18.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

