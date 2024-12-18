module.exports = async function (context, req) {
  const date = "2024-12-18T09:13:21.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

