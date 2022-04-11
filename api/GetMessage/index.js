module.exports = async function (context, req) {
  const date = "2022-04-11T22:10:21.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

