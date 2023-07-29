module.exports = async function (context, req) {
  const date = "2023-07-29T17:06:52.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

