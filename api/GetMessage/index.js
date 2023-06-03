module.exports = async function (context, req) {
  const date = "2023-06-03T04:09:58.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

