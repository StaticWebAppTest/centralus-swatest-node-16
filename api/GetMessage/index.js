module.exports = async function (context, req) {
  const date = "2022-03-19T00:40:55.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

