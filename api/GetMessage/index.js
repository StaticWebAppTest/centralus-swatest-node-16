module.exports = async function (context, req) {
  const date = "2023-04-14T14:08:11.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

