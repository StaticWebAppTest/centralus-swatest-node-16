module.exports = async function (context, req) {
  const date = "2023-07-02T20:09:13.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

