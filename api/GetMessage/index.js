module.exports = async function (context, req) {
  const date = "2022-11-11T10:12:41.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

