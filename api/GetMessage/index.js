module.exports = async function (context, req) {
  const date = "2023-01-27T14:08:36.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

