module.exports = async function (context, req) {
  const date = "2023-04-11T23:08:42.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

