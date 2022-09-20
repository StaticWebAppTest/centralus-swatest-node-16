module.exports = async function (context, req) {
  const date = "2022-09-20T07:21:25.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

