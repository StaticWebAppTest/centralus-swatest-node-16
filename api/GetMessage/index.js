module.exports = async function (context, req) {
  const date = "2024-09-12T09:12:03.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

