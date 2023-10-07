module.exports = async function (context, req) {
  const date = "2023-10-07T06:11:03.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

