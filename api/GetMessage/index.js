module.exports = async function (context, req) {
  const date = "2023-04-14T12:16:25.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

