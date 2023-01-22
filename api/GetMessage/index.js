module.exports = async function (context, req) {
  const date = "2023-01-22T10:09:09.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

