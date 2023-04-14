module.exports = async function (context, req) {
  const date = "2023-04-14T07:08:10.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

