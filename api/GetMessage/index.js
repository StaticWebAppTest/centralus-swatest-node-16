module.exports = async function (context, req) {
  const date = "2023-07-06T18:11:35.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

