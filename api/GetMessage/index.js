module.exports = async function (context, req) {
  const date = "2022-07-23T11:09:35.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

