module.exports = async function (context, req) {
  const date = "2023-07-21T03:09:08.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

