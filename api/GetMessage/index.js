module.exports = async function (context, req) {
  const date = "2022-10-08T01:04:44.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

