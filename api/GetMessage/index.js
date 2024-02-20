module.exports = async function (context, req) {
  const date = "2024-02-20T18:12:52.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

