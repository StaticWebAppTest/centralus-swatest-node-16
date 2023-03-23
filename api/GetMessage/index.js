module.exports = async function (context, req) {
  const date = "2023-03-23T17:08:50.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

