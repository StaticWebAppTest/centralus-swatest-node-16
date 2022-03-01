module.exports = async function (context, req) {
  const date = "2022-03-01T17:11:33.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

