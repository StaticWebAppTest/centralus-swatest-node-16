module.exports = async function (context, req) {
  const date = "2022-06-06T04:24:47.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

