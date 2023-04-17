module.exports = async function (context, req) {
  const date = "2023-04-17T18:11:18.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

