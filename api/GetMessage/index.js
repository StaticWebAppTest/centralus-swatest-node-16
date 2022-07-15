module.exports = async function (context, req) {
  const date = "2022-07-15T18:13:50.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

