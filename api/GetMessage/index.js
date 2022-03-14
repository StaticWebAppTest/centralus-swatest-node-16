module.exports = async function (context, req) {
  const date = "2022-03-14T21:09:19.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

