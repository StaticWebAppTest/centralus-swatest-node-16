module.exports = async function (context, req) {
  const date = "2024-11-23T18:14:30.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

