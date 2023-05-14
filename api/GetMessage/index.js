module.exports = async function (context, req) {
  const date = "2023-05-14T16:10:02.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

