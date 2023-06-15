module.exports = async function (context, req) {
  const date = "2023-06-15T10:09:39.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

