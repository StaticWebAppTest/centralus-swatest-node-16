module.exports = async function (context, req) {
  const date = "2024-04-20T13:10:15.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

