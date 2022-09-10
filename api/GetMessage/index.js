module.exports = async function (context, req) {
  const date = "2022-09-10T04:08:37.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

