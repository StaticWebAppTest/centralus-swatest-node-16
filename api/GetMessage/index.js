module.exports = async function (context, req) {
  const date = "2022-09-01T14:10:32.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

