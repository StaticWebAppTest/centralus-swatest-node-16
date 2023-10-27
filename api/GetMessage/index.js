module.exports = async function (context, req) {
  const date = "2023-10-27T16:10:43.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

