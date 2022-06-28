module.exports = async function (context, req) {
  const date = "2022-06-28T10:11:38.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

