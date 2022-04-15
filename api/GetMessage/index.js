module.exports = async function (context, req) {
  const date = "2022-04-15T00:51:01.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

