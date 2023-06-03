module.exports = async function (context, req) {
  const date = "2023-06-03T02:14:54.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

