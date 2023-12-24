module.exports = async function (context, req) {
  const date = "2023-12-24T16:10:21.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

