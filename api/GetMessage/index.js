module.exports = async function (context, req) {
  const date = "2023-11-19T10:09:09.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

