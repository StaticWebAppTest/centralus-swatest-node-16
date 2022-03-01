module.exports = async function (context, req) {
  const date = "2022-03-01T09:13:55.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

