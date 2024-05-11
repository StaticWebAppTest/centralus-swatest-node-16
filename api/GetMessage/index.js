module.exports = async function (context, req) {
  const date = "2024-05-11T10:09:52.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

