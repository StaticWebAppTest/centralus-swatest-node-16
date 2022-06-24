module.exports = async function (context, req) {
  const date = "2022-06-24T18:13:57.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

