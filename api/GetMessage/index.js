module.exports = async function (context, req) {
  const date = "2022-06-18T16:13:25.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

