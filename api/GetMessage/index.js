module.exports = async function (context, req) {
  const date = "2024-02-23T11:07:51.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

