module.exports = async function (context, req) {
  const date = "2023-05-18T06:12:03.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

