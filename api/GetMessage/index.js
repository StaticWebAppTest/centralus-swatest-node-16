module.exports = async function (context, req) {
  const date = "2023-04-07T14:07:54.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

