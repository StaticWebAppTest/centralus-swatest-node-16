module.exports = async function (context, req) {
  const date = "2024-12-24T15:11:17.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

