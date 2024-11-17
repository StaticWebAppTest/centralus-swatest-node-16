module.exports = async function (context, req) {
  const date = "2024-11-17T09:12:30.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

