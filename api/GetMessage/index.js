module.exports = async function (context, req) {
  const date = "2022-09-08T01:06:31.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

