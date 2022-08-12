module.exports = async function (context, req) {
  const date = "2022-08-12T08:13:54.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

