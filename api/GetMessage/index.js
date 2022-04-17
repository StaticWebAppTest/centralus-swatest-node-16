module.exports = async function (context, req) {
  const date = "2022-04-17T23:10:49.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

