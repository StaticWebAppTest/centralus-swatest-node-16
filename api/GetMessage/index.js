module.exports = async function (context, req) {
  const date = "2023-02-06T06:12:46.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

