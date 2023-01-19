module.exports = async function (context, req) {
  const date = "2023-01-19T22:09:22.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

