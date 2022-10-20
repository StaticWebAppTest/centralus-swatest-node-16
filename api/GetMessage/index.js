module.exports = async function (context, req) {
  const date = "2022-10-20T10:16:03.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

