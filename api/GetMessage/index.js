module.exports = async function (context, req) {
  const date = "2023-03-15T17:09:26.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

