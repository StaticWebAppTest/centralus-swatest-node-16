module.exports = async function (context, req) {
  const date = "2023-06-22T09:08:25.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

