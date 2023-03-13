module.exports = async function (context, req) {
  const date = "2023-03-13T18:11:44.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

