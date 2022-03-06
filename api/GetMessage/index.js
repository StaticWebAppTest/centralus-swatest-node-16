module.exports = async function (context, req) {
  const date = "2022-03-06T16:12:38.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

