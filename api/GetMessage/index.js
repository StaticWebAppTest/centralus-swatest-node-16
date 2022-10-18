module.exports = async function (context, req) {
  const date = "2022-10-18T14:29:17.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

