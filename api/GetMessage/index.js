module.exports = async function (context, req) {
  const date = "2023-11-27T20:09:17.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

