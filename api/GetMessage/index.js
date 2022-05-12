module.exports = async function (context, req) {
  const date = "2022-05-12T08:13:21.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

