module.exports = async function (context, req) {
  const date = "2023-12-30T04:11:42.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

