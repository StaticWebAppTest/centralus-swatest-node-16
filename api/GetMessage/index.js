module.exports = async function (context, req) {
  const date = "2024-12-21T16:12:40.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

