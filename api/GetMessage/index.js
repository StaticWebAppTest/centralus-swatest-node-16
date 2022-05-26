module.exports = async function (context, req) {
  const date = "2022-05-26T14:10:23.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

