module.exports = async function (context, req) {
  const date = "2024-11-14T14:11:34.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

