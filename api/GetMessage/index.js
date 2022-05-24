module.exports = async function (context, req) {
  const date = "2022-05-24T18:14:57.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

