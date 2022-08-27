module.exports = async function (context, req) {
  const date = "2022-08-27T17:12:31.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

