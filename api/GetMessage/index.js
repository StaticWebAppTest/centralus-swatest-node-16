module.exports = async function (context, req) {
  const date = "2022-12-21T13:15:39.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

