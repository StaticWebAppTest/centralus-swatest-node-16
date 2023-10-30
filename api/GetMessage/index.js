module.exports = async function (context, req) {
  const date = "2023-10-30T14:08:27.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

