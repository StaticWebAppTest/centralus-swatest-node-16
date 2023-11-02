module.exports = async function (context, req) {
  const date = "2023-11-02T13:10:54.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

