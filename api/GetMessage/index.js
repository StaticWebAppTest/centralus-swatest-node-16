module.exports = async function (context, req) {
  const date = "2023-03-07T05:10:09.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

