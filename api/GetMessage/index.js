module.exports = async function (context, req) {
  const date = "2023-07-31T04:10:27.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

