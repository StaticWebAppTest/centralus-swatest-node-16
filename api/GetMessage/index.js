module.exports = async function (context, req) {
  const date = "2022-04-29T11:09:31.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

