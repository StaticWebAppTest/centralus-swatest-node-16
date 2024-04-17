module.exports = async function (context, req) {
  const date = "2024-04-17T13:09:46.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

