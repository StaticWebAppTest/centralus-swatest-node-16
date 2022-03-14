module.exports = async function (context, req) {
  const date = "2022-03-14T14:10:28.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

