module.exports = async function (context, req) {
  const date = "2022-12-08T18:11:54.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

