module.exports = async function (context, req) {
  const date = "2023-06-29T04:12:01.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

