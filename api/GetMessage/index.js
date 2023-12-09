module.exports = async function (context, req) {
  const date = "2023-12-09T06:11:12.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

