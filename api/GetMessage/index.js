module.exports = async function (context, req) {
  const date = "2022-03-30T23:10:26.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

