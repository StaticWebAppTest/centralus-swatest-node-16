module.exports = async function (context, req) {
  const date = "2022-10-20T07:23:47.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

