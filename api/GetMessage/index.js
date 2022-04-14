module.exports = async function (context, req) {
  const date = "2022-04-14T07:11:07.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

