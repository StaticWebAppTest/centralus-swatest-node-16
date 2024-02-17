module.exports = async function (context, req) {
  const date = "2024-02-17T11:06:45.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

