module.exports = async function (context, req) {
  const date = "2022-09-24T09:13:01.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

