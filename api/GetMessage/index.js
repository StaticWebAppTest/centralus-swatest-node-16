module.exports = async function (context, req) {
  const date = "2022-03-01T21:09:07.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

