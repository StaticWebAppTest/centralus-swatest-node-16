module.exports = async function (context, req) {
  const date = "2023-05-26T04:10:36.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

