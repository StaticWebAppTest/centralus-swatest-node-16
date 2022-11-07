module.exports = async function (context, req) {
  const date = "2022-11-07T13:38:30.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

