module.exports = async function (context, req) {
  const date = "2023-07-24T07:08:48.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

