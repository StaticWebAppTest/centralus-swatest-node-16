module.exports = async function (context, req) {
  const date = "2023-08-27T17:06:54.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

