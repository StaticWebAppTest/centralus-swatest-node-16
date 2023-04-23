module.exports = async function (context, req) {
  const date = "2023-04-23T05:08:09.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

