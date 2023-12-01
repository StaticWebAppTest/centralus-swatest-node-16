module.exports = async function (context, req) {
  const date = "2023-12-01T15:09:26.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

