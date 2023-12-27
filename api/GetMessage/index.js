module.exports = async function (context, req) {
  const date = "2023-12-27T18:10:56.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

