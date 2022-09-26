module.exports = async function (context, req) {
  const date = "2022-09-26T11:10:36.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

