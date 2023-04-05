module.exports = async function (context, req) {
  const date = "2023-04-05T14:09:23.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

