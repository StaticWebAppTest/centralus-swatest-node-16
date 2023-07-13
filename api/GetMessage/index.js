module.exports = async function (context, req) {
  const date = "2023-07-13T06:13:12.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

