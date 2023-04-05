module.exports = async function (context, req) {
  const date = "2023-04-05T16:14:14.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

