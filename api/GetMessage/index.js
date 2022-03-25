module.exports = async function (context, req) {
  const date = "2022-03-25T17:13:30.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

