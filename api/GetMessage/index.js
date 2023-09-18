module.exports = async function (context, req) {
  const date = "2023-09-18T05:08:28.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

