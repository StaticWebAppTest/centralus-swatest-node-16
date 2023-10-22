module.exports = async function (context, req) {
  const date = "2023-10-22T04:10:27.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

