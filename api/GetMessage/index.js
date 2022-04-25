module.exports = async function (context, req) {
  const date = "2022-04-25T23:11:15.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

