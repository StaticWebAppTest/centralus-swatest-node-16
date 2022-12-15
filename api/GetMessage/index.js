module.exports = async function (context, req) {
  const date = "2022-12-15T08:13:15.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

