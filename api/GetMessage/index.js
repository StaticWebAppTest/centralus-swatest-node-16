module.exports = async function (context, req) {
  const date = "2024-05-20T13:12:17.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

