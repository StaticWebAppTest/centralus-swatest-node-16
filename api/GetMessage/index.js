module.exports = async function (context, req) {
  const date = "2023-09-07T17:07:38.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

