module.exports = async function (context, req) {
  const date = "2022-03-25T09:10:48.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

