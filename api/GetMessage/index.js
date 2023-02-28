module.exports = async function (context, req) {
  const date = "2023-02-28T02:18:39.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

