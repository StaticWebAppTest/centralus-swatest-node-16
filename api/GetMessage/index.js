module.exports = async function (context, req) {
  const date = "2024-11-11T08:15:45.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

