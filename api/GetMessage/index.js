module.exports = async function (context, req) {
  const date = "2022-09-20T13:45:47.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

