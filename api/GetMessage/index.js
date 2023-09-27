module.exports = async function (context, req) {
  const date = "2023-09-27T18:11:33.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

