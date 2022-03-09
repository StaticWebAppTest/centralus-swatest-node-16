module.exports = async function (context, req) {
  const date = "2022-03-09T00:41:23.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

