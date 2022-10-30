module.exports = async function (context, req) {
  const date = "2022-10-30T16:15:24.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

