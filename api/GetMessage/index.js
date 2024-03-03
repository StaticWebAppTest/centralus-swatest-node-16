module.exports = async function (context, req) {
  const date = "2024-03-03T13:09:03.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

