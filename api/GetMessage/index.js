module.exports = async function (context, req) {
  const date = "2024-08-14T13:15:05.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

