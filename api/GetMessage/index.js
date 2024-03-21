module.exports = async function (context, req) {
  const date = "2024-03-21T07:09:12.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

