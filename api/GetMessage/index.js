module.exports = async function (context, req) {
  const date = "2022-10-24T18:26:11.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

