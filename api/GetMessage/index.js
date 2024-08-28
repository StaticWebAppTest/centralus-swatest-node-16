module.exports = async function (context, req) {
  const date = "2024-08-28T18:14:15.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

