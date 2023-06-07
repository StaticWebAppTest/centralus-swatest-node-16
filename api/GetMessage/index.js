module.exports = async function (context, req) {
  const date = "2023-06-07T13:12:45.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

