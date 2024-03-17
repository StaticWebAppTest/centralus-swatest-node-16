module.exports = async function (context, req) {
  const date = "2024-03-17T18:10:09.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

