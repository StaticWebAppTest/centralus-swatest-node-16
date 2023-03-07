module.exports = async function (context, req) {
  const date = "2023-03-07T11:08:53.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

