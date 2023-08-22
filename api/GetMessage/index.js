module.exports = async function (context, req) {
  const date = "2023-08-22T10:09:09.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

