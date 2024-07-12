module.exports = async function (context, req) {
  const date = "2024-07-12T11:09:01.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

