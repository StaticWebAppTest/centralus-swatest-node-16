module.exports = async function (context, req) {
  const date = "2022-10-31T23:12:45.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

