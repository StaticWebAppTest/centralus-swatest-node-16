module.exports = async function (context, req) {
  const date = "2022-03-15T23:10:28.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

