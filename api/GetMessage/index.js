module.exports = async function (context, req) {
  const date = "2023-04-10T18:10:58.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

