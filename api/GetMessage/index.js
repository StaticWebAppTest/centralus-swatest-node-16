module.exports = async function (context, req) {
  const date = "2023-03-10T10:11:16.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

