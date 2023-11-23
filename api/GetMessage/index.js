module.exports = async function (context, req) {
  const date = "2023-11-23T23:09:30.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

