module.exports = async function (context, req) {
  const date = "2022-10-07T06:22:20.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

