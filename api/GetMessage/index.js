module.exports = async function (context, req) {
  const date = "2023-02-12T20:09:44.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

