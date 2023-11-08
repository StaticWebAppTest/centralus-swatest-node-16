module.exports = async function (context, req) {
  const date = "2023-11-08T23:08:47.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

