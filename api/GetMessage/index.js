module.exports = async function (context, req) {
  const date = "2022-12-01T18:12:54.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

