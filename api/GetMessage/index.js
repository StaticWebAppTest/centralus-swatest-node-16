module.exports = async function (context, req) {
  const date = "2023-09-23T05:07:40.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

