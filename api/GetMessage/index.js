module.exports = async function (context, req) {
  const date = "2023-03-04T02:15:10.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

