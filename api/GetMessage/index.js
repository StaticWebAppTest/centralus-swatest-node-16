module.exports = async function (context, req) {
  const date = "2023-10-09T01:43:23.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

