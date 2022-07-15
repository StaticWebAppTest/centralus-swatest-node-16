module.exports = async function (context, req) {
  const date = "2022-07-15T23:11:19.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

