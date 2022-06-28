module.exports = async function (context, req) {
  const date = "2022-06-28T11:09:10.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

