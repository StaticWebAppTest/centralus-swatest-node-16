module.exports = async function (context, req) {
  const date = "2023-04-28T00:49:00.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

