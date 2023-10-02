module.exports = async function (context, req) {
  const date = "2023-10-02T04:10:35.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

