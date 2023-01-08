module.exports = async function (context, req) {
  const date = "2023-01-08T12:16:10.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

