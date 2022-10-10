module.exports = async function (context, req) {
  const date = "2022-10-10T18:22:00.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

