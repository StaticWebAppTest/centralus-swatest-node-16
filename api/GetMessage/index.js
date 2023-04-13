module.exports = async function (context, req) {
  const date = "2023-04-13T09:09:26.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

