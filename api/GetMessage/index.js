module.exports = async function (context, req) {
  const date = "2022-02-25T02:01:22.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

