module.exports = async function (context, req) {
  const date = "2024-02-08T15:09:23.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

