module.exports = async function (context, req) {
  const date = "2022-11-12T05:11:48.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

