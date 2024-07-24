module.exports = async function (context, req) {
  const date = "2024-07-24T23:11:27.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

