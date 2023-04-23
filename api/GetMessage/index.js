module.exports = async function (context, req) {
  const date = "2023-04-23T14:07:15.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

