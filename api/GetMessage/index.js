module.exports = async function (context, req) {
  const date = "2023-03-02T09:10:32.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

