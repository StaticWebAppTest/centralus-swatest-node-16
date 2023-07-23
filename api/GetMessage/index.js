module.exports = async function (context, req) {
  const date = "2023-07-23T17:07:15.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

