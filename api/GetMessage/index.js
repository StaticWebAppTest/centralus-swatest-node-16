module.exports = async function (context, req) {
  const date = "2022-08-19T11:09:47.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

