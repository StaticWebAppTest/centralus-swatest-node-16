module.exports = async function (context, req) {
  const date = "2023-08-27T15:07:22.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

