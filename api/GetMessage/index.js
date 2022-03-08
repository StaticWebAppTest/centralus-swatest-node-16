module.exports = async function (context, req) {
  const date = "2022-03-08T18:11:57.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

