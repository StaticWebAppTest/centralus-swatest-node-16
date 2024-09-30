module.exports = async function (context, req) {
  const date = "2024-09-30T14:11:45.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

