module.exports = async function (context, req) {
  const date = "2022-12-30T14:08:08.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

