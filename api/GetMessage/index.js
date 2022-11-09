module.exports = async function (context, req) {
  const date = "2022-11-09T18:14:18.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

