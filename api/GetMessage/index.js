module.exports = async function (context, req) {
  const date = "2022-10-14T16:20:03.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

