module.exports = async function (context, req) {
  const date = "2023-07-23T16:09:56.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

