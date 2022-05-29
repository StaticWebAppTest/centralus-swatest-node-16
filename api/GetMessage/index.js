module.exports = async function (context, req) {
  const date = "2022-05-29T13:22:50.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

