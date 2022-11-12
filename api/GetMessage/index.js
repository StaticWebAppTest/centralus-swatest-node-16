module.exports = async function (context, req) {
  const date = "2022-11-12T15:11:34.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

