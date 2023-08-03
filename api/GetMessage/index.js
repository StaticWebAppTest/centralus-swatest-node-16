module.exports = async function (context, req) {
  const date = "2023-08-03T08:11:17.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

