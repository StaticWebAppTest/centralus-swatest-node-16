module.exports = async function (context, req) {
  const date = "2022-11-19T23:10:05.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

