module.exports = async function (context, req) {
  const date = "2024-11-21T17:11:12.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

