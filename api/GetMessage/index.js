module.exports = async function (context, req) {
  const date = "2023-04-21T23:08:40.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

