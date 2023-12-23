module.exports = async function (context, req) {
  const date = "2023-12-23T09:08:15.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

