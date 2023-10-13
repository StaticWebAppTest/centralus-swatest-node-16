module.exports = async function (context, req) {
  const date = "2023-10-13T18:11:48.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

