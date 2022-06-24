module.exports = async function (context, req) {
  const date = "2022-06-24T03:08:02.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

