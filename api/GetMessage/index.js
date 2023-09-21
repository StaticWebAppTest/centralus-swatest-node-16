module.exports = async function (context, req) {
  const date = "2023-09-21T04:10:36.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

