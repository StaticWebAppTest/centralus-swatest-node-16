module.exports = async function (context, req) {
  const date = "2023-10-05T04:10:44.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

