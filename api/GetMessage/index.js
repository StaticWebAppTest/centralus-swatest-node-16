module.exports = async function (context, req) {
  const date = "2022-06-30T14:09:10.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

