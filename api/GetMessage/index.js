module.exports = async function (context, req) {
  const date = "2024-01-15T07:09:21.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

