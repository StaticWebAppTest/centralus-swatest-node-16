module.exports = async function (context, req) {
  const date = "2023-10-27T04:10:30.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

