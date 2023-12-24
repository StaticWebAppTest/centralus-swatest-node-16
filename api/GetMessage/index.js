module.exports = async function (context, req) {
  const date = "2023-12-24T15:08:16.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

