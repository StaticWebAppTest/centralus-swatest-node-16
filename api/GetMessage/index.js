module.exports = async function (context, req) {
  const date = "2022-06-12T18:11:48.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

