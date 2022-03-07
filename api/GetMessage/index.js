module.exports = async function (context, req) {
  const date = "2022-03-07T02:06:44.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

