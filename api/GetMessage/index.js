module.exports = async function (context, req) {
  const date = "2023-10-19T19:06:58.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

