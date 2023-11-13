module.exports = async function (context, req) {
  const date = "2023-11-13T18:11:35.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

