module.exports = async function (context, req) {
  const date = "2022-10-25T04:20:42.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

