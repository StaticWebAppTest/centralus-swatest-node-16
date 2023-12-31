module.exports = async function (context, req) {
  const date = "2023-12-31T08:11:03.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

