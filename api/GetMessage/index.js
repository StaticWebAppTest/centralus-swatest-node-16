module.exports = async function (context, req) {
  const date = "2022-09-03T14:10:39.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

