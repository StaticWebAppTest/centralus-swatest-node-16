module.exports = async function (context, req) {
  const date = "2023-11-12T00:45:06.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

