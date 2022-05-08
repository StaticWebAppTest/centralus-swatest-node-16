module.exports = async function (context, req) {
  const date = "2022-05-08T09:10:48.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

