module.exports = async function (context, req) {
  const date = "2024-12-08T11:09:26.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

