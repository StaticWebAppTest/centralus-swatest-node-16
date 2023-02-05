module.exports = async function (context, req) {
  const date = "2023-02-05T02:20:40.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

