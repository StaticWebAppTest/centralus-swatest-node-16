module.exports = async function (context, req) {
  const date = "2023-11-11T18:10:08.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

