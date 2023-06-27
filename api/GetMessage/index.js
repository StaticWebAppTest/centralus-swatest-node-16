module.exports = async function (context, req) {
  const date = "2023-06-27T19:07:54.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

