module.exports = async function (context, req) {
  const date = "2023-01-01T07:08:07.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

