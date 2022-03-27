module.exports = async function (context, req) {
  const date = "2022-03-27T16:13:23.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

