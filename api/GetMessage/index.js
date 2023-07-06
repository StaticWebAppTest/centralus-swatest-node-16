module.exports = async function (context, req) {
  const date = "2023-07-06T15:10:51.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

