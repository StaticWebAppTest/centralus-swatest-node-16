module.exports = async function (context, req) {
  const date = "2023-04-07T08:11:28.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

