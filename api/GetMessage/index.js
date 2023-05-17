module.exports = async function (context, req) {
  const date = "2023-05-17T02:03:07.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

