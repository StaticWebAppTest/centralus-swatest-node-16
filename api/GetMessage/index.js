module.exports = async function (context, req) {
  const date = "2022-07-27T01:03:49.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

