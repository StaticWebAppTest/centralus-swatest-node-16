module.exports = async function (context, req) {
  const date = "2022-06-27T21:09:26.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

