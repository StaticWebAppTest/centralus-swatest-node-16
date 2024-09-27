module.exports = async function (context, req) {
  const date = "2024-09-27T04:14:24.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

