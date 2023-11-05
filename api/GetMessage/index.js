module.exports = async function (context, req) {
  const date = "2023-11-05T04:10:23.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

