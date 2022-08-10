module.exports = async function (context, req) {
  const date = "2022-08-10T03:39:30.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

