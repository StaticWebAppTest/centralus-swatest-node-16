module.exports = async function (context, req) {
  const date = "2023-11-10T05:08:32.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

