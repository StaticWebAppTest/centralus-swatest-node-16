module.exports = async function (context, req) {
  const date = "2024-01-28T00:44:07.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

