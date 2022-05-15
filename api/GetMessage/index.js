module.exports = async function (context, req) {
  const date = "2022-05-15T14:09:48.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

