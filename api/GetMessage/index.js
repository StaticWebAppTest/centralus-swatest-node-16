module.exports = async function (context, req) {
  const date = "2023-08-24T18:10:42.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

