module.exports = async function (context, req) {
  const date = "2022-07-22T13:31:00.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

