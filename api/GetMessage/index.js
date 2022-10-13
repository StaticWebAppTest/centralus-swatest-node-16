module.exports = async function (context, req) {
  const date = "2022-10-13T23:15:41.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

