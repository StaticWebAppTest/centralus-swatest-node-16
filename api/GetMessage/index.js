module.exports = async function (context, req) {
  const date = "2023-09-27T02:16:10.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

