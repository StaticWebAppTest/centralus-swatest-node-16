module.exports = async function (context, req) {
  const date = "2023-10-07T17:06:58.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

