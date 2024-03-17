module.exports = async function (context, req) {
  const date = "2024-03-17T15:09:44.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

