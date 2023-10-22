module.exports = async function (context, req) {
  const date = "2023-10-22T18:10:14.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

