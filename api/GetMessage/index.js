module.exports = async function (context, req) {
  const date = "2022-11-12T18:13:06.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

