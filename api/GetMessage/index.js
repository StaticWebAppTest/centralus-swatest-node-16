module.exports = async function (context, req) {
  const date = "2022-07-20T10:11:42.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

