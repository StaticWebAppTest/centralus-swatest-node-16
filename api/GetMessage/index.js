module.exports = async function (context, req) {
  const date = "2023-07-02T18:10:54.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

