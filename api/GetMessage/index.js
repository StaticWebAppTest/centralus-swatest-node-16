module.exports = async function (context, req) {
  const date = "2023-05-13T01:57:49.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

