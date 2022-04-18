module.exports = async function (context, req) {
  const date = "2022-04-18T00:57:06.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

