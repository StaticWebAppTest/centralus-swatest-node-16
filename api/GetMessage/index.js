module.exports = async function (context, req) {
  const date = "2022-09-26T13:46:31.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

