module.exports = async function (context, req) {
  const date = "2023-08-30T13:11:10.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

