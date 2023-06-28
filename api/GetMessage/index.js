module.exports = async function (context, req) {
  const date = "2023-06-28T13:19:37.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

