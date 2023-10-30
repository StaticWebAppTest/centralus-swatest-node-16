module.exports = async function (context, req) {
  const date = "2023-10-30T08:11:57.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

