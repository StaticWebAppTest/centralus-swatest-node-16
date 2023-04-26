module.exports = async function (context, req) {
  const date = "2023-04-26T18:11:01.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

