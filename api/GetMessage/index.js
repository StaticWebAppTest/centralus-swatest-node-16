module.exports = async function (context, req) {
  const date = "2022-05-15T18:13:15.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

