module.exports = async function (context, req) {
  const date = "2023-03-08T15:10:29.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

