module.exports = async function (context, req) {
  const date = "2023-10-03T18:11:48.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

