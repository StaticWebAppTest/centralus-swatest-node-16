module.exports = async function (context, req) {
  const date = "2022-12-11T20:09:39.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

