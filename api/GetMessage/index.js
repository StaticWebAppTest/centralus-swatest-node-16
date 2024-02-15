module.exports = async function (context, req) {
  const date = "2024-02-15T10:10:03.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

