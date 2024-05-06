module.exports = async function (context, req) {
  const date = "2024-05-06T18:14:09.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

