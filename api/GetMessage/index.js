module.exports = async function (context, req) {
  const date = "2024-07-20T04:14:05.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

