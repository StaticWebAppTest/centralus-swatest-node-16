module.exports = async function (context, req) {
  const date = "2023-04-24T09:09:43.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

