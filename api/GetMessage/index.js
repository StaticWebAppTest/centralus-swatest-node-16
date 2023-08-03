module.exports = async function (context, req) {
  const date = "2023-08-03T10:08:56.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

