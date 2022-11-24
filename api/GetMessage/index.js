module.exports = async function (context, req) {
  const date = "2022-11-24T18:13:05.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

