module.exports = async function (context, req) {
  const date = "2023-07-06T03:25:58.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

