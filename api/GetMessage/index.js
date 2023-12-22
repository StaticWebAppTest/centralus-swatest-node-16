module.exports = async function (context, req) {
  const date = "2023-12-22T10:09:49.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

