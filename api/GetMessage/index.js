module.exports = async function (context, req) {
  const date = "2023-07-05T17:09:06.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

