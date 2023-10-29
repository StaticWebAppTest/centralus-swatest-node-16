module.exports = async function (context, req) {
  const date = "2023-10-29T17:06:55.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

