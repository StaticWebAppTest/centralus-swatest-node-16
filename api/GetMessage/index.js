module.exports = async function (context, req) {
  const date = "2022-05-17T20:11:46.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

