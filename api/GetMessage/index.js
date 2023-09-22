module.exports = async function (context, req) {
  const date = "2023-09-22T13:11:12.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

