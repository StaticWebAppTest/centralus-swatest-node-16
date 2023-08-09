module.exports = async function (context, req) {
  const date = "2023-08-09T06:11:45.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

