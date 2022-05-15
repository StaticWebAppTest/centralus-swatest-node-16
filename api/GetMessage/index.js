module.exports = async function (context, req) {
  const date = "2022-05-15T15:10:54.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

