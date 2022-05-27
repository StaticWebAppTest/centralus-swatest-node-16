module.exports = async function (context, req) {
  const date = "2022-05-27T20:12:23.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

