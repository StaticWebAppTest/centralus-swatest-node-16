module.exports = async function (context, req) {
  const date = "2023-10-23T20:08:07.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

