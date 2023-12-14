module.exports = async function (context, req) {
  const date = "2023-12-14T00:42:57.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

