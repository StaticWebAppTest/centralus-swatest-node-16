module.exports = async function (context, req) {
  const date = "2023-02-03T23:09:23.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

