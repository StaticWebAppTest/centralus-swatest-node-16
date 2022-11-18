module.exports = async function (context, req) {
  const date = "2022-11-18T13:29:08.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

