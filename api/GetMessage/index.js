module.exports = async function (context, req) {
  const date = "2022-04-07T11:09:46.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

