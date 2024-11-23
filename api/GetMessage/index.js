module.exports = async function (context, req) {
  const date = "2024-11-23T11:08:56.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

