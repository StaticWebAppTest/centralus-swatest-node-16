module.exports = async function (context, req) {
  const date = "2023-02-23T18:13:05.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

