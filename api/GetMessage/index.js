module.exports = async function (context, req) {
  const date = "2023-06-28T03:21:54.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

