module.exports = async function (context, req) {
  const date = "2024-02-07T13:09:08.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

