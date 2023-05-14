module.exports = async function (context, req) {
  const date = "2023-05-14T21:08:15.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

