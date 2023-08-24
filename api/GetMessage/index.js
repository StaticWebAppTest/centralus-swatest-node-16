module.exports = async function (context, req) {
  const date = "2023-08-24T13:10:54.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

