module.exports = async function (context, req) {
  const date = "2022-10-10T14:34:43.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

