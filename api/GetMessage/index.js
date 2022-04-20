module.exports = async function (context, req) {
  const date = "2022-04-20T21:09:18.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

