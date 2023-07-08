module.exports = async function (context, req) {
  const date = "2023-07-08T20:09:28.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

