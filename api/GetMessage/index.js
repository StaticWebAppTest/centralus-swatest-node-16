module.exports = async function (context, req) {
  const date = "2022-10-07T12:27:42.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

