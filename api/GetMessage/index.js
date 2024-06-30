module.exports = async function (context, req) {
  const date = "2024-06-30T15:10:13.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

