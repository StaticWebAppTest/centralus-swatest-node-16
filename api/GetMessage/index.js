module.exports = async function (context, req) {
  const date = "2023-10-24T18:11:46.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

