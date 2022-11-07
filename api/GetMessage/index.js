module.exports = async function (context, req) {
  const date = "2022-11-07T09:11:50.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

