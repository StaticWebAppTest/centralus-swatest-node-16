module.exports = async function (context, req) {
  const date = "2022-04-04T15:11:27.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

