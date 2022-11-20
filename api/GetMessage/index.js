module.exports = async function (context, req) {
  const date = "2022-11-20T16:13:47.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

