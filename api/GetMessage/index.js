module.exports = async function (context, req) {
  const date = "2022-10-03T21:11:54.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

