module.exports = async function (context, req) {
  const date = "2022-07-07T17:30:18.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

