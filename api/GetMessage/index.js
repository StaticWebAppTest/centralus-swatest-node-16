module.exports = async function (context, req) {
  const date = "2022-06-03T00:49:39.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

