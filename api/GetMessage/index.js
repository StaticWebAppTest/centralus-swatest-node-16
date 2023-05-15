module.exports = async function (context, req) {
  const date = "2023-05-15T18:11:03.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

