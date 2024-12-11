module.exports = async function (context, req) {
  const date = "2024-12-11T15:13:13.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

