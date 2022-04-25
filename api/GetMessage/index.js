module.exports = async function (context, req) {
  const date = "2022-04-25T14:10:39.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

