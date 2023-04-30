module.exports = async function (context, req) {
  const date = "2023-04-30T00:52:30.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

