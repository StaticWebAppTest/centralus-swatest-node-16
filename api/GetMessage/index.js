module.exports = async function (context, req) {
  const date = "2023-03-22T04:10:50.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

