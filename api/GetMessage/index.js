module.exports = async function (context, req) {
  const date = "2023-03-22T08:11:54.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

