module.exports = async function (context, req) {
  const date = "2024-01-20T11:07:11.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

