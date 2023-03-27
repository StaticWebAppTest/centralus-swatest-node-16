module.exports = async function (context, req) {
  const date = "2023-03-27T03:09:55.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

