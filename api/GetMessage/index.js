module.exports = async function (context, req) {
  const date = "2022-05-18T18:16:32.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

