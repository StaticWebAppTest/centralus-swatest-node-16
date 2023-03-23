module.exports = async function (context, req) {
  const date = "2023-03-23T19:07:17.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

