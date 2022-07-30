module.exports = async function (context, req) {
  const date = "2022-07-30T10:10:52.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

