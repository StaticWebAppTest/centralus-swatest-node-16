module.exports = async function (context, req) {
  const date = "2022-05-22T14:10:18.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

