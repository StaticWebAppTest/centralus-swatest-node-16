module.exports = async function (context, req) {
  const date = "2024-03-19T00:41:08.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

