module.exports = async function (context, req) {
  const date = "2023-05-23T20:09:10.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

